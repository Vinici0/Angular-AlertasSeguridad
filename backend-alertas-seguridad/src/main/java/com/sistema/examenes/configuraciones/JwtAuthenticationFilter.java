package com.sistema.examenes.configuraciones;

import com.sistema.examenes.servicios.impl.UserDetailsServiceImpl;
import io.jsonwebtoken.ExpiredJwtException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.web.authentication.WebAuthenticationDetailsSource;
import org.springframework.stereotype.Component;
import org.springframework.web.filter.OncePerRequestFilter;

import javax.servlet.FilterChain;
import javax.servlet.ServletException;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;

@Component
public class JwtAuthenticationFilter extends OncePerRequestFilter {
    /*
     * Un filtro es un componente que se ejecuta antes o despues de que se ejecute
     * una peticion.
     * Se encargarga de comprobar si el token es valido o no.
     */
    @Autowired
    private UserDetailsServiceImpl userDetailsService;

    @Autowired
    private JwtUtils jwtUtil;

    @Override
    protected void doFilterInternal(HttpServletRequest request, HttpServletResponse response, FilterChain filterChain)
            throws ServletException, IOException {
        // Obtiene el token del header de la peticion http y lo valida
        String requestTokenHeader = request.getHeader("Authorization");
        String username = null;
        String jwtToken = null;

        // Si el token es valido , se obtiene el usuario y se le asigna el rol
        // correspondiente
        if (requestTokenHeader != null && requestTokenHeader.startsWith("Bearer ")) {
            // 7 es la longitud de la palabra bearer mas un espacio en blanco , es decir , 7
            // caracteres
            jwtToken = requestTokenHeader.substring(7);

            try {
                // Obtiene el username del token y lo asigna a la variable username
                username = this.jwtUtil.extractUsername(jwtToken);
            } catch (ExpiredJwtException exception) {
                System.out.println("El token ha expirado");
            } catch (Exception e) {
                e.printStackTrace();
            }

        } else {
            System.out.println("Token invalido , no empieza con bearer string");
        }

        if (username != null && SecurityContextHolder.getContext().getAuthentication() == null) {

            // Srive para obtener el usuario con el username obtenido del token
            UserDetails userDetails = this.userDetailsService.loadUserByUsername(username);

            if (this.jwtUtil.validateToken(jwtToken, userDetails)) {// Sirve para validar el token

                UsernamePasswordAuthenticationToken usernamePasswordAuthenticationToken = new UsernamePasswordAuthenticationToken(
                        userDetails, null, userDetails.getAuthorities());
                // Crea un objeto UsernamePasswordAuthenticationToken con los detalles del
                // usuario y las autoridades.

                usernamePasswordAuthenticationToken
                        .setDetails(new WebAuthenticationDetailsSource().buildDetails(request));
                // Establece los detalles de autenticación del objeto
                // UsernamePasswordAuthenticationToken.

                SecurityContextHolder.getContext().setAuthentication(usernamePasswordAuthenticationToken);
                // Establece el objeto UsernamePasswordAuthenticationToken en el contexto de
                // seguridad.
            } else {
                System.out.println("El token no es valido");
                // Si el token JWT no es válido, se muestra un mensaje en la consola.
            }
        }

        filterChain.doFilter(request, response);// Continua con la peticion http normalmente
    }
}

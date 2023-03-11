package com.sistema.examenes.modelo;

import org.springframework.security.core.GrantedAuthority;

//GrantedAuthority - sirve para asignarle un rol a un usuario
public class Authority implements GrantedAuthority {

    private String authority;

    public Authority(String authority) {
        this.authority = authority;
    }

    @Override
    public String getAuthority() {
        return this.authority;
    }

}

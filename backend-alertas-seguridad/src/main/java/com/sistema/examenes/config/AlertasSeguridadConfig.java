package com.sistema.examenes.config;

import org.springframework.amqp.core.*;
import org.springframework.amqp.rabbit.connection.ConnectionFactory;
import org.springframework.amqp.rabbit.core.RabbitTemplate;
import org.springframework.amqp.support.converter.Jackson2JsonMessageConverter;
import org.springframework.amqp.support.converter.MessageConverter;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

@Configuration
public class AlertasSeguridadConfig {

    public static final String COLA_ALERTAS_GRAVES = "alertas-graves";
    public static final String COLA_ALERTAS_MEDIO = "alertas-medio";
    public static final String COLA_ALERTAS_LEVES = "alertas-leves";

    public static final String ROUTING_KEY_GRAVE = "1";
    public static final String ROUTING_KEY_MEDIO = "2";
    public static final String ROUTING_KEY_LEVE = "3";

    @Bean
    public Queue queueAlertasGraves() {
        return new Queue(COLA_ALERTAS_GRAVES, true);
    }

    @Bean
    public Queue queueAlertasMedio() {
        return new Queue(COLA_ALERTAS_MEDIO, true);
    }

    @Bean
    public Queue queueAlertasLeves() {
        return new Queue(COLA_ALERTAS_LEVES, true);
    }

    @Bean
    DirectExchange exchange() {
        return new DirectExchange("alertas-exchange");
    }

    @Bean
    Binding bindingAlertasGraves(Queue queueAlertasGraves, DirectExchange exchange) {
        return BindingBuilder.bind(queueAlertasGraves).to(exchange).with(ROUTING_KEY_GRAVE);
    }

    @Bean
    Binding bindingAlertasMedio(Queue queueAlertasMedio, DirectExchange exchange) {
        return BindingBuilder.bind(queueAlertasMedio).to(exchange).with(ROUTING_KEY_MEDIO);
    }

    @Bean
    Binding bindingAlertasLeves(Queue queueAlertasLeves, DirectExchange exchange) {
        return BindingBuilder.bind(queueAlertasLeves).to(exchange).with(ROUTING_KEY_LEVE);
    }

    @Bean
    MessageConverter messageConverter() {
        return new Jackson2JsonMessageConverter();
    }

    @Bean
    RabbitTemplate rabbitTemplate(ConnectionFactory factory) {
        RabbitTemplate rabbitTemplate = new RabbitTemplate(factory);
        rabbitTemplate.setMessageConverter(messageConverter());
        return rabbitTemplate;
    }

}

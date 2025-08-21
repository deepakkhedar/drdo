//package net.javaguides.todo;

//import org.modelmapper.ModelMapper;
//import org.springframework.boot.SpringApplication;
//import org.springframework.boot.autoconfigure.SpringBootApplication;
//import org.springframework.context.annotation.Bean;

//@SpringBootApplication
//public class TodoManagementApplication {
//
 //
 //
	//public static void main(String[] args) {
	//	SpringApplication.run(TodoManagementApplication.class, args);
	//}

//}
package net.javaguides.todo;

import org.modelmapper.ModelMapper;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;
import org.springframework.web.servlet.config.annotation.CorsRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;

@SpringBootApplication
public class TodoManagementApplication {


	public static void main(String[] args) {
		SpringApplication.run(TodoManagementApplication.class, args);
	}

//	@Bean
//	public WebMvcConfigurer corsConfigurer() {
//		return new WebMvcConfigurer() {
//			@Override
//			public void addCorsMappings(CorsRegistry registry) {
//				registry.addMapping("/api/**")
//						.allowedMethods("*")
//						.allowedOrigins("http://localhost:3000");
//			}
//		};
//	}
}

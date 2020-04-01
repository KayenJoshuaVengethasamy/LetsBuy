package com.letsbuy.webservice.controller;

import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@CrossOrigin(origins = "*", maxAge = 3600)
@RestController
public class TestRestAPIs {
	
	@GetMapping("/letsbuy/test/user")
	@PreAuthorize("hasRole('USER') or hasRole('ADMIN')")
	public String userAccess() {
		return "WELCOME TO LetsBuyCoZa";
	}

	@GetMapping("/letsbuy/test/pm")
	@PreAuthorize("hasRole('PM') or hasRole('ADMIN')")
	public String projectManagementAccess() {
		return "WELCOME TO THE MODERATOR SECTION OF LetsBuyCoZa";
	}
	
	@GetMapping("/letsbuy/test/admin")
	@PreAuthorize("hasRole('ADMIN')")
	public String adminAccess() {
		return "WELCOME TO THE ADMINISTRATOR AREA FOR LetsBuyCoZa";
	}
}
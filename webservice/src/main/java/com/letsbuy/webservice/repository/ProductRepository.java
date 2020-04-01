package com.letsbuy.webservice.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.letsbuy.webservice.model.Product;

public interface ProductRepository extends JpaRepository<Product, Long> {
	Boolean existsByProductName(String productName);
}

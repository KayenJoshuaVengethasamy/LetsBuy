package com.letsbuy.webservice.security.services;

import java.util.Collection;

import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;

import com.letsbuy.webservice.model.Product;

public class ProductPrinciple implements UserDetails {

	private Long productID;

	private String productBrand;

	private String productName;

	private String productImage;

	private double productPrice;

	private String productDescription;
	private double productQuantity;

	private String productTag1;

	private String productTag2;

	private String productTag3;

	private String productTag4;

	private String productTag5;

	private String productTag6;

	private String productTag7;

	private String productTag8;

	private String productTag9;

	private String productTag10;

	private String productTag11;

	private String productTag12;

	private String productTag13;

	private String productTag14;

	private String productTag15;
	private static final long serialVersionUID = 1L;

	public ProductPrinciple(Long productID, String productBrand, String productName, String productImage,
			double productPrice, String productDescription, double productQuantity, String productTag1, String productTag2, String productTag3,
			String productTag4, String productTag5, String productTag6, String productTag7, String productTag8,
			String productTag9, String productTag10, String productTag11, String productTag12, String productTag13,
			String productTag14, String productTag15) {

		this.productID = productID;
		this.productBrand = productBrand;
		this.productName = productName;
		this.productImage = productImage;
		this.productPrice = productPrice;
		this.productDescription = productDescription;
		this.productQuantity = productQuantity;
		this.productTag1 = productTag1;
		this.productTag2 = productTag2;
		this.productTag3 = productTag3;
		this.productTag4 = productTag4;
		this.productTag5 = productTag5;
		this.productTag6 = productTag6;
		this.productTag7 = productTag7;
		this.productTag8 = productTag8;
		this.productTag9 = productTag9;
		this.productTag10 = productTag10;
		this.productTag11 = productTag11;
		this.productTag12 = productTag12;
		this.productTag13 = productTag13;
		this.productTag14 = productTag14;
		this.productTag15 = productTag15;
	}

	public static ProductPrinciple build(Product product) {
		return new ProductPrinciple(product.getProductID(), product.getProductBrand(), product.getProductName(),
				product.getProductImage(), product.getProductPrice(), product.getProductDescription(), product.getProductQuantity(),
				product.getProductTag1(), product.getProductTag2(), product.getProductTag3(), product.getProductTag4(),
				product.getProductTag5(), product.getProductTag6(), product.getProductTag7(), product.getProductTag8(),
				product.getProductTag9(), product.getProductTag10(), product.getProductTag11(),
				product.getProductTag12(), product.getProductTag13(), product.getProductTag14(),
				product.getProductTag15());
	}

	public Long getProductID() {
		return productID;
	}

	public String getProductBrand() {
		return productBrand;
	}

	public String getProductName() {
		return productName;
	}

	public String getProductImage() {
		return productImage;
	}

	public double getProductPrice() {
		return productPrice;
	}

	public String getProductDescription() {
		return productDescription;
	}

	public double getProductQuantity() {
		return productQuantity;
	}

	public String getProductTag1() {
		return productTag1;
	}

	public String getProductTag2() {
		return productTag2;
	}

	public String getProductTag3() {
		return productTag3;
	}

	public String getProductTag4() {
		return productTag4;
	}

	public String getProductTag5() {
		return productTag5;
	}

	public String getProductTag6() {
		return productTag6;
	}

	public String getProductTag7() {
		return productTag7;
	}

	public String getProductTag8() {
		return productTag8;
	}

	public String getProductTag9() {
		return productTag9;
	}

	public String getProductTag10() {
		return productTag10;
	}

	public String getProductTag11() {
		return productTag11;
	}

	public String getProductTag12() {
		return productTag12;
	}

	public String getProductTag13() {
		return productTag13;
	}

	public String getProductTag14() {
		return productTag14;
	}

	public String getProductTag15() {
		return productTag15;
	}

	@Override
	public Collection<? extends GrantedAuthority> getAuthorities() {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public String getPassword() {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public String getUsername() {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public boolean isAccountNonExpired() {
		// TODO Auto-generated method stub
		return false;
	}

	@Override
	public boolean isAccountNonLocked() {
		// TODO Auto-generated method stub
		return false;
	}

	@Override
	public boolean isCredentialsNonExpired() {
		// TODO Auto-generated method stub
		return false;
	}

	@Override
	public boolean isEnabled() {
		// TODO Auto-generated method stub
		return false;
	}
	
}
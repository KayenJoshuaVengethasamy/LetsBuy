package com.letsbuy.webservice.model;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;
import javax.persistence.UniqueConstraint;
import javax.validation.constraints.NotBlank;
import javax.validation.constraints.NotNull;

@Entity
@Table(uniqueConstraints = @UniqueConstraint(columnNames = "productName"))
public class Product {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name = "productID")
	private Long productID;
	@NotBlank

	@Column(name = "productBrand")
	private String productBrand;

	@NotBlank

	@Column(name = "productName")
	private String productName;

	@NotBlank

	@Column(name = "productImage")
	private String productImage;

	@NotNull

	@Column(name = "productPrice")
	private double productPrice;

	@NotBlank
	@Column(name = "productDescription")
	private String productDescription;

	@NotNull
	@Column(name = "productQuantity")
	private double productQuantity;

	@NotBlank
	@Column(name = "productTag1")
	private String productTag1;

	@NotBlank
	@Column(name = "productTag2")
	private String productTag2;

	@Column(name = "productTag3")
	private String productTag3;

	@Column(name = "productTag4")
	private String productTag4;

	@Column(name = "productTag5")
	private String productTag5;

	@Column(name = "productTag6")
	private String productTag6;

	@Column(name = "productTag7")
	private String productTag7;

	@Column(name = "productTag8")
	private String productTag8;

	@Column(name = "productTag9")
	private String productTag9;

	@Column(name = "productTag10")
	private String productTag10;

	@Column(name = "productTag11")
	private String productTag11;

	@Column(name = "productTag12")
	private String productTag12;

	@Column(name = "productTag13")
	private String productTag13;

	@Column(name = "productTag14")
	private String productTag14;

	@Column(name = "productTag15")
	private String productTag15;

	public Product() {
	}

	public Product(String productBrand, String productName, String productImage, double productPrice,
			String productDescription, double productQuantity, String productTag1, String productTag2, String productTag3,
			String productTag4, String productTag5, String productTag6, String productTag7, String productTag8,
			String productTag9, String productTag10, String productTag11, String productTag12, String productTag13,
			String productTag14, String productTag15) {

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

	public Long getProductID() {
		return productID;
	}

	public void setProductID(Long productID) {
		this.productID = productID;
	}

	public String getProductBrand() {
		return productBrand;
	}

	public void setProductBrand(String productBrand) {
		this.productBrand = productBrand;
	}

	public String getProductName() {
		return productName;
	}

	public void setProductName(String productName) {
		this.productName = productName;
	}

	public String getProductImage() {
		return productImage;
	}

	public void setProductImage(String productImage) {
		this.productImage = productImage;
	}

	public double getProductPrice() {
		return productPrice;
	}

	public void setProductPrice(double productPrice) {
		this.productPrice = productPrice;
	}

	public String getProductDescription() {
		return productDescription;
	}

	public void setProductDescription(String productDescription) {
		this.productDescription = productDescription;
	}

	public String getProductTag1() {
		return productTag1;
	}

	public void setProductTag1(String productTag1) {
		this.productTag1 = productTag1;
	}

	public String getProductTag2() {
		return productTag2;
	}

	public void setProductTag2(String productTag2) {
		this.productTag2 = productTag2;
	}

	public String getProductTag3() {
		return productTag3;
	}

	public void setProductTag3(String productTag3) {
		this.productTag3 = productTag3;
	}

	public String getProductTag4() {
		return productTag4;
	}

	public void setProductTag4(String productTag4) {
		this.productTag4 = productTag4;
	}

	public String getProductTag5() {
		return productTag5;
	}

	public void setProductTag5(String productTag5) {
		this.productTag5 = productTag5;
	}

	public String getProductTag6() {
		return productTag6;
	}

	public void setProductTag6(String productTag6) {
		this.productTag6 = productTag6;
	}

	public String getProductTag7() {
		return productTag7;
	}

	public void setProductTag7(String productTag7) {
		this.productTag7 = productTag7;
	}

	public String getProductTag8() {
		return productTag8;
	}

	public void setProductTag8(String productTag8) {
		this.productTag8 = productTag8;
	}

	public String getProductTag9() {
		return productTag9;
	}

	public void setProductTag9(String productTag9) {
		this.productTag9 = productTag9;
	}

	public String getProductTag10() {
		return productTag10;
	}

	public void setProductTag10(String productTag10) {
		this.productTag10 = productTag10;
	}

	public String getProductTag11() {
		return productTag11;
	}

	public void setProductTag11(String productTag11) {
		this.productTag11 = productTag11;
	}

	public String getProductTag12() {
		return productTag12;
	}

	public void setProductTag12(String productTag12) {
		this.productTag12 = productTag12;
	}

	public String getProductTag13() {
		return productTag13;
	}

	public void setProductTag13(String productTag13) {
		this.productTag13 = productTag13;
	}

	public String getProductTag14() {
		return productTag14;
	}

	public void setProductTag14(String productTag14) {
		this.productTag14 = productTag14;
	}

	public String getProductTag15() {
		return productTag15;
	}

	public void setProductTag15(String productTag15) {
		this.productTag15 = productTag15;
	}

	public double getProductQuantity() {
		return productQuantity;
	}

	public void setProductQuantity(double productQuantity) {
		this.productQuantity = productQuantity;
	}

}

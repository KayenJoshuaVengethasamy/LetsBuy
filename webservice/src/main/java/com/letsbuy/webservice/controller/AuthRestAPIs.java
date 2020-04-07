package com.letsbuy.webservice.controller;

import java.util.HashMap;
import java.util.HashSet;
import java.util.List;
import java.util.Map;
import java.util.Set;

import javax.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.letsbuy.webservice.error_handling.ResourceNotFoundException;
import com.letsbuy.webservice.message.request.LoginForm;
import com.letsbuy.webservice.message.request.ProductRegisterForm;
import com.letsbuy.webservice.message.request.SignUpForm;
import com.letsbuy.webservice.message.response.JwtResponse;
import com.letsbuy.webservice.message.response.ResponseMessage;
import com.letsbuy.webservice.model.Product;
import com.letsbuy.webservice.model.Role;
import com.letsbuy.webservice.model.RoleName;
import com.letsbuy.webservice.model.User;
import com.letsbuy.webservice.repository.ProductRepository;
import com.letsbuy.webservice.repository.RoleRepository;
import com.letsbuy.webservice.repository.UserRepository;
import com.letsbuy.webservice.security.jwt.JwtProvider;

@RestController
@CrossOrigin(origins = "http://localhost:4200")
@RequestMapping("/letsbuy/auth")
public class AuthRestAPIs {

	@Autowired
	AuthenticationManager authenticationManager;

	@Autowired
	UserRepository userRepository;
	@Autowired
	ProductRepository productRepository;

	@Autowired
	RoleRepository roleRepository;

	@Autowired
	PasswordEncoder encoder;

	@Autowired
	JwtProvider jwtProvider;

	@PostMapping("/signin")
	public ResponseEntity<?> authenticateUser(@Valid @RequestBody LoginForm loginRequest) {

		Authentication authentication = authenticationManager.authenticate(
				new UsernamePasswordAuthenticationToken(loginRequest.getUsername(), loginRequest.getPassword()));

		SecurityContextHolder.getContext().setAuthentication(authentication);

		String jwt = jwtProvider.generateJwtToken(authentication);
		UserDetails userDetails = (UserDetails) authentication.getPrincipal();

		return ResponseEntity.ok(new JwtResponse(jwt, userDetails.getUsername(), userDetails.getAuthorities()));
	}

	@PostMapping("/signup")
	public ResponseEntity<?> registerUser(@Valid @RequestBody SignUpForm signUpRequest) {
		if (userRepository.existsByUsername(signUpRequest.getUsername())) {
			return new ResponseEntity<>(new ResponseMessage("USERNAME ALREADY IN USE : " + signUpRequest.getUsername()),
					HttpStatus.BAD_REQUEST);
		}

		if (userRepository.existsByUserEmail(signUpRequest.getUserEmail())) {
			return new ResponseEntity<>(new ResponseMessage("EMAIL ALREADY IN USE : " + signUpRequest.getUserEmail()),
					HttpStatus.BAD_REQUEST);
		}
		User user = new User(signUpRequest.getUserFirstName(),

				signUpRequest.getUserLastName(), signUpRequest.getUsername(), signUpRequest.getUserEmail(),
				encoder.encode(signUpRequest.getPassword()));

		Set<String> strRoles = signUpRequest.getRole();
		Set<Role> roles = new HashSet<>();

		strRoles.forEach(role -> {
			switch (role) {
			case "admin":
				Role adminRole = roleRepository.findByName(RoleName.ROLE_ADMIN)
						.orElseThrow(() -> new RuntimeException("NO USER ROLE FOUND!!!"));
				roles.add(adminRole);

				break;
			case "pm":
				Role pmRole = roleRepository.findByName(RoleName.ROLE_PM)
						.orElseThrow(() -> new RuntimeException("NO USER ROLE FOUND!!!"));
				roles.add(pmRole);

				break;
			default:
				Role userRole = roleRepository.findByName(RoleName.ROLE_USER)
						.orElseThrow(() -> new RuntimeException("NO USER ROLE FOUND!!!"));
				roles.add(userRole);
			}
		});

		user.setRoles(roles);
		userRepository.save(user);

		return new ResponseEntity<>(new ResponseMessage("First Name:" + user.getUserFirstName() + "\nLast Name:"
				+ user.getUserLastName() + "\nUsername:" + user.getUsername() + "\nEmail:" + user.getUserEmail()),
				HttpStatus.OK);
	}

	@GetMapping("/users")
	public List<User> getAllusers() {
		return userRepository.findAll();
	}

	@GetMapping("/users/{userID}")
	public ResponseEntity<User> getUserById(@PathVariable(value = "userID") Long userID) throws ResourceNotFoundException {
		User user = userRepository.findById(userID)
				.orElseThrow(() -> new ResourceNotFoundException("User not found for this ID : " + userID));
		return ResponseEntity.ok().body(user);
	}

	@PutMapping("/users/{userID}")
	public ResponseEntity<User> updateUser(@PathVariable(value = "userID") Long userID,
			@Valid @RequestBody User userDetails) throws ResourceNotFoundException {
		User user = userRepository.findById(userID)
				.orElseThrow(() -> new ResourceNotFoundException("User not found for this ID : " + userID));

		user.setUserEmail(userDetails.getUserEmail());
		user.setUserFirstName(userDetails.getUserFirstName());
		user.setUserLastName(userDetails.getUserLastName());
		final User updatedUser = userRepository.save(user);
		return ResponseEntity.ok(updatedUser);
	}

	@DeleteMapping("/users/{userID}")
	public Map<String, Boolean> deleteUser(@PathVariable(value = "userID") Long userID) throws ResourceNotFoundException {
		User user = userRepository.findById(userID)
				.orElseThrow(() -> new ResourceNotFoundException("User not found for this ID : " + userID));
		userRepository.delete(user);
		Map<String, Boolean> response = new HashMap<>();
		response.put("deleted", Boolean.TRUE);
		return response;
	}

	@GetMapping("/products/all")
	public List<Product> getAllProducts() {
		return productRepository.findAll();
	}

	@GetMapping("/products/getProductById/{productID}")
	public ResponseEntity<Product> getProductById(@PathVariable(value = "productID") Long productID)
			throws ResourceNotFoundException {
		Product product = productRepository.findById(productID)
				.orElseThrow(() -> new ResourceNotFoundException("Product not found for this ID : " + productID));
		return ResponseEntity.ok().body(product);
	}

	@PutMapping("/products/updateProduct/{productID}")
	public ResponseEntity<Product> updateProduct(@PathVariable(value = "productID") Long productID,
			@Valid @RequestBody Product productDetails) throws ResourceNotFoundException {
		Product product = productRepository.findById(productID)
				.orElseThrow(() -> new ResourceNotFoundException("Product not found for this ID : " + productID));
		product.setProductDescription(productDetails.getProductDescription());
		product.setProductImage(productDetails.getProductImage());
		product.setProductName(productDetails.getProductName());
		product.setProductPrice(productDetails.getProductPrice());

		final Product updatedProduct = productRepository.save(product);
		return ResponseEntity.ok(updatedProduct);
	}

	@DeleteMapping("/products/deleteProducts/{productID}")
	public Map<String, Boolean> deleteProducts(@PathVariable(value = "productID") Long productID)
			throws ResourceNotFoundException {
		Product product = productRepository.findById(productID)
				.orElseThrow(() -> new ResourceNotFoundException("Product not found for this ID :: " + productID));
		productRepository.delete(product);
		Map<String, Boolean> response = new HashMap<>();
		response.put("DELETED product " + product.getProductName(), Boolean.TRUE);
		return response;
	}

	@PostMapping("/products/registerProduct")
	public ResponseEntity<?> registerProduct(@Valid @RequestBody ProductRegisterForm productRegister) {
		if (productRepository.existsByProductName(productRegister.getProductName())) {
			return new ResponseEntity<>(new ResponseMessage("PRODUCT ALREADY EXISTS : "
					+ productRegister.getProductName() + ". Try another name or update the details of the product"),
					HttpStatus.BAD_REQUEST);
		}
		Product product = new Product(

				productRegister.getProductBrand(), productRegister.getProductName(), productRegister.getProductImage(),
				productRegister.getProductPrice(), productRegister.getProductDescription(), productRegister.getProductQuantity(),
				productRegister.getProductTag1(), productRegister.getProductTag2(), productRegister.getProductTag3(),
				productRegister.getProductTag4(), productRegister.getProductTag5(), productRegister.getProductTag6(),
				productRegister.getProductTag7(), productRegister.getProductTag8(), productRegister.getProductTag9(),
				productRegister.getProductTag10(), productRegister.getProductTag11(), productRegister.getProductTag12(),
				productRegister.getProductTag13(), productRegister.getProductTag14(), productRegister.getProductTag15()

		);
		productRepository.save(product);

		return new ResponseEntity<>(new ResponseMessage(
				"Product name : " + product.getProductName() + "\nPrice : " + product.getProductPrice()
						+ "\nDescription : " + product.getProductDescription() + "\nQuantity : " + product.getProductQuantity() + "\nTag 1 : " + product.getProductTag1()
						+ "\nTag 2 : " + product.getProductTag2() + "\nTag 3 : " + product.getProductTag3()
						+ "\nTag 4 : " + product.getProductTag4() + "\nTag 5 : " + product.getProductTag5()
						+ "\nTag 6 : " + product.getProductTag6() + "\nTag 7 : " + product.getProductTag7()
						+ "\nTag 8 : " + product.getProductTag8() + "\nTag 9 : " + product.getProductTag9()
						+ "\nTag 10 : " + product.getProductTag10() + "\nTag 11 : " + product.getProductTag11()
						+ "\nTag 12 : " + product.getProductTag12() + "\nTag 13 : " + product.getProductTag13()
						+ "\nTag 14 : " + product.getProductTag14() + "\nTag 15 : " + product.getProductTag15()

		), HttpStatus.OK);
	}
}
package com.letsbuy.webservice.security.services;

import java.util.Collection;
import java.util.List;
import java.util.Objects;
import java.util.stream.Collectors;

import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;

import com.fasterxml.jackson.annotation.JsonIgnore;
import com.letsbuy.webservice.model.User;

public class UserPrinciple implements UserDetails {
	private static final long serialVersionUID = 1L;

	private Long userID;

	private String userFirstName;

	private String userLastName;

	private String username;

	private String userEmail;

	@JsonIgnore
	private String password;

	private Collection<? extends GrantedAuthority> authorities;

	public UserPrinciple(Long userID, String userFirstName, String userLastName, String username, String userEmail,
			String password, Collection<? extends GrantedAuthority> authorities) {
		super();
		this.userID = userID;
		this.userFirstName = userFirstName;
		this.userLastName = userLastName;
		this.username = username;
		this.userEmail = userEmail;
		this.password = password;
		this.authorities = authorities;
	}

	public static UserPrinciple build(User user) {
		List<GrantedAuthority> authorities = user.getRoles().stream()
				.map(role -> new SimpleGrantedAuthority(role.getName().name())).collect(Collectors.toList());

		return new UserPrinciple(user.getUserID(), user.getUserFirstName(), user.getUserLastName(), user.getUsername(),
				user.getUserEmail(), user.getPassword(), authorities);
	}

	public Long getUserID() {
		return userID;
	}

	public String getUserFirstName() {
		return userFirstName;
	}

	public String getUserLastName() {
		return userLastName;
	}

	public String getUserEmail() {
		return userEmail;
	}

	@Override
	public String getUsername() {
		return username;
	}

	@Override
	public String getPassword() {
		return password;
	}

	@Override
	public Collection<? extends GrantedAuthority> getAuthorities() {
		return authorities;
	}

	@Override
	public boolean isAccountNonExpired() {
		return true;
	}

	@Override
	public boolean isAccountNonLocked() {
		return true;
	}

	@Override
	public boolean isCredentialsNonExpired() {
		return true;
	}

	@Override
	public boolean isEnabled() {
		return true;
	}

	@Override
	public boolean equals(Object o) {
		if (this == o)
			return true;
		if (o == null || getClass() != o.getClass())
			return false;

		UserPrinciple user = (UserPrinciple) o;
		return Objects.equals(userID, user.userID);
	}
}
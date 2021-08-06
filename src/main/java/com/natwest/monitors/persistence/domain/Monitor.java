package com.natwest.monitors.persistence.domain;

import java.util.Objects;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

@Entity
public class Monitor {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long id;
	
	@Column(unique=true, nullable=false)
	private String name;
	
	@Column(nullable=false)
	private float price;

	@Override
	public int hashCode() {
		return Objects.hash(id, name, price);
	}

	@Override
	public boolean equals(Object obj) {
		if (this == obj)
			return true;
		if (obj == null)
			return false;
		if (getClass() != obj.getClass())
			return false;
		Monitor other = (Monitor) obj;
		return Objects.equals(id, other.id) && Objects.equals(name, other.name)
				&& Float.floatToIntBits(price) == Float.floatToIntBits(other.price);
	}

	@Override
	public String toString() {
		return "Monitor [id=" + id + ", name=" + name + ", price=" + price + "]";
	}

	public Long getId() {
		return id;
	}

//	public void setId(Long id) {
//		this.id = id;
//	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public float getPrice() {
		return price;
	}

	public void setPrice(float price) {
		this.price = price;
	}

	
	
	
}

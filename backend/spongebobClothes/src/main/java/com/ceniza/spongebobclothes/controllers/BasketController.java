package com.ceniza.spongebobclothes.controllers;
import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;
import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.JsonMappingException;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.ceniza.spongebobclothes.entity.services.IBasketService;

import java.util.Optional;
import com.ceniza.spongebobclothes.entity.models.Basket;
@CrossOrigin(origins = "http://localhost:8100")
@RestController
public class BasketController {
	@Autowired
	IBasketService basketservice;
	
	
	@GetMapping("/SpongebobBasket")
	List<Basket> getAll(){
		return basketservice.getAll();
	}

	
	@GetMapping("/SpongebobBasket/{id}")
	Basket getOne(@PathVariable("id") long id) {
		Optional<Basket> b = basketservice.getOne(id);
		if(b.isPresent()) {
			return b.get();
		};
		
		return null;
	}

	@PostMapping("/SpongebobBasket")
	void add(Basket item) {
		System.out.println(item.getModel());
		basketservice.add(item);
	}
	@DeleteMapping("/SpongebobBasket/{id}")
	void delete(@PathVariable("id") long id) {
		System.out.println(id);
		basketservice.delete(id);
	}
	
	@PutMapping("SpongebobBasket/{id}")
		void update(@PathVariable("id") long id , Basket item) {
			basketservice.update(item, id);
	}
}
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
import com.ceniza.spongebobclothes.entity.services.IClotheService;
import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.JsonMappingException;
import com.fasterxml.jackson.databind.ObjectMapper;

import java.util.Optional;

import com.ceniza.spongebobclothes.entity.models.Clothe;

@CrossOrigin(origins = "http://localhost:8100")
@RestController
public class ShopController {
	@Autowired
	IClotheService shopservice;
	
	
	@GetMapping("/SpongebobClothes")
	List<Clothe> getAll(){
		return shopservice.getAll();
	}

	
	@GetMapping("/SpongebobClothes/{id}")
	Clothe getOne(@PathVariable("id") long id) {
		Optional<Clothe> b = shopservice.getOne(id);
		if(b.isPresent()) {
			return b.get();
		};
		
		return null;
	}

	@PostMapping("/SpongebobClothes")
	void add(Clothe clothe) {
		System.out.println(clothe.getModel());
		shopservice.add(clothe);
	}
	@DeleteMapping("/SpongebobClothes/{id}")
	void delete(@PathVariable("id") long id) {
		System.out.println(id);
		shopservice.delete(id);
	}
	
	@PutMapping("SpongebobClothes/{id}")
		void update(@PathVariable("id") long id , Clothe clothe) {
			shopservice.update(clothe, id);
	}
}

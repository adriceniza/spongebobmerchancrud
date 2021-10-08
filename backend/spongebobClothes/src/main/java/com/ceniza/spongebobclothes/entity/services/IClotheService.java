package com.ceniza.spongebobclothes.entity.services;
import java.util.List;
import java.util.Optional;

import com.ceniza.spongebobclothes.entity.models.Clothe;

public interface IClotheService {
	List<Clothe> getAll();
	Optional<Clothe> getOne(long idClothe);
	void add(Clothe clothe);
	void delete(long colthe);
	void update(Clothe clothe, long idClothe);
}

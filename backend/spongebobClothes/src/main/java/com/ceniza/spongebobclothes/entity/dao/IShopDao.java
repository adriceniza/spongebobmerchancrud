package com.ceniza.spongebobclothes.entity.dao;
import org.springframework.data.repository.CrudRepository;
import com.ceniza.spongebobclothes.entity.models.Clothe;

public interface IShopDao extends CrudRepository<Clothe, Long>{

}

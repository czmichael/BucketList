package com.bl.data.external.service;

import java.util.List;

import com.bl.data.model.DataSource;
import com.bl.data.model.FoodEntry;


public interface FatSecretService {
	
	public List<FoodEntry> getUserFoodEntriesByDate(DataSource dataSource, Integer dateInt);

}

package com.bl.services;

import com.bl.data.model.DataSource;
import com.bl.data.model.User;


public interface DataSourceService {
	
	public DataSource getDataSourceByUser(User user);

}

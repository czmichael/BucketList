package com.bl.dao;

import com.bl.data.model.DataSource;


public interface DataSourceDao {
	
	public DataSource getDataSourceByUserId(int userId);

}

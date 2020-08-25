CREATE USER 'survey'@'%' IDENTIFIED WITH mysql_native_password BY 'survey'; 

grant all privileges on *.* to 'survey'@'%' with grant option; 

flush privileges;  

create database survey;
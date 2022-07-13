
create table Role (
    Role_id int  IDENTITY(1,1) NOT NULL primary key,
	Role_Name varchar(30) not null,
	Role_Descr varchar(30) not null,
)

create table Department (
    Department_Id int  IDENTITY(1,1) NOT NULL primary key,
	Department_Name varchar(30) not null,
)


create table Qualification (
    Qualification_id int  IDENTITY(1,1) NOT NULL primary key,
	Qualification_Name varchar(30) not null,
	Qualification_Descr varchar(30) not null,
)

create table Skill (
    Skill_id int  IDENTITY(1,1) NOT NULL primary key,
	Skill_Name varchar(30) not null,
	Skill_Descr varchar(30) not null,
)

create table Users(
    User_id int  IDENTITY(1,1) NOT NULL ,
	User_Name varchar(30) not null primary key,
	User_email varchar(30) not null,
	password varchar(30) not null,
)


create table Admins(
    Admin_id int  IDENTITY(1,1) NOT NULL ,
	Admin_Name varchar(30) not null primary key,
	Admin_email varchar(30) not null,
	password varchar(30) not null,
)


create table Employee(
	Employee_Id int  IDENTITY(1,1) NOT NULL primary key,
	Fname varchar(30) not null,
	Mname varchar(30) not null,
	Lname varchar(30) not null,
	DOB datetime not null,
	Phone_No int not null,
	Email_Id varchar(30) not null,
	PanCard_No varchar(30) not null,
	DOJ datetime not null,
	Bank_Name varchar(30) not null,
	Account_No int not null,
	IFSC varchar(30) not null,
	Street_Name varchar(30) not null,
	City varchar(30) not null,
	State varchar(30) not null,
	Is_Admin char not null,
	Create_Date datetime not null,
	Modify_Date datetime not null,

	Role_id  int FOREIGN KEY REFERENCES Role(Role_id),
	Department_Id int FOREIGN KEY REFERENCES Department(Department_Id),
	User_Name varchar(30) FOREIGN KEY REFERENCES Users(User_Name),
	Qualification_id int  FOREIGN KEY REFERENCES Qualification(Qualification_id) 
)


create table Employee_Qualification(
Id int  IDENTITY(1,1) NOT NULL ,
Qualification_Name varchar(30) not null,
Employee_Id int  FOREIGN KEY REFERENCES Employee(Employee_Id) ,
Qualification_id int  FOREIGN KEY REFERENCES Qualification(Qualification_id) 
)

create table Employee_Skill (
Id int  IDENTITY(1,1) NOT NULL ,
	Skill_Name varchar(30) not null,
Skill_Id int  FOREIGN KEY REFERENCES Skill(Skill_Id) ,
Employee_Id int  FOREIGN KEY REFERENCES Employee(Employee_Id) ,
)



create table Employee_Dependent (
	Dependent_Id int  IDENTITY(1,1) NOT NULL ,
	Dependent_Name varchar(30) not null primary key,
	Gender char not null,
	DOB datetime not null,
	Relationship varchar(30) not null,
	Phone varchar(30) not null,
	Employee_Id int  FOREIGN KEY REFERENCES Employee(Employee_Id) ,
)


create table Salary (
	Salary_Id int  IDENTITY(1,1) NOT NULL ,
	Month varchar(30) not null,
	Year int not null,
	Basic_Pay int not null,
	HRA int not null,
	Conveyance_Allowences int not null,
	Special_Allowences int not null,
	PF int not null,
	TDS int not null,
	Gross_Salary int not null,
	Net_Salary int not null,
	Employee_Id int  FOREIGN KEY REFERENCES Employee(Employee_Id) ,
)


create table Employee_Salary (
	Id int  IDENTITY(1,1) NOT NULL ,
	Basic_Pay int not null,
	HRA int not null,
	Conveyance_Allowences int not null,
	Special_Allowences int not null,
	PF int not null,
	TDS int not null,
	Gross_Salary int not null,
	Net_Salary int not null,
	Employee_Id int  FOREIGN KEY REFERENCES Employee(Employee_Id) ,
)
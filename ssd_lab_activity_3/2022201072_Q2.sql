select Fname,Minit,Lname,count(Super_ssn) from EMPLOYEE 
group by Super_ssn having count(Super_ssn)>0 order by count(Super_ssn) asc;


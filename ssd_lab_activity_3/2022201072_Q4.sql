select count(Dnumber) from DEPT_LOCATIONS where Dnumber in
(
select Dnumber from DEPARTMENT where Mgr_ssn in(
select Essn from DEPENDENT group by Essn having count(Sex='F')>1)) 
group by Dnumber;

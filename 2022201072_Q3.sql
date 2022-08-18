select count(Essn) from WORKS_ON where Essn in (
select Mgr_ssn from DEPARTMENT where Dnumber in(
select Dnum from PROJECT where Pname="ProductY")) 
group by Essn;

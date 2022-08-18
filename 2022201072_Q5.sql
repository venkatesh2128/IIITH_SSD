select count(Essn) from DEPENDENT where Essn in (select Mgr_ssn from DEPARTMENT where Dnumber in (select Dnumber from DEPT_LOCATIONS group by Dnumber having count(Dnumber)>1)) group by Essn;


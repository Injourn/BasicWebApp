using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace BasicWebApp.Models {
    public class Employee {
        public int EmployeeId { get; set; }
        public string EmployeeName { get; set; }
        public string Department { get; set; }
        public string Date { get; set; }
        public string PhotoFileName { get; set; }
    }
}
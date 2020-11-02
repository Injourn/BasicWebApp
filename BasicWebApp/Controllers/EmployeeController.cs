using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web;
using System.Web.Http;
using BasicWebApp.Models;
using System.Configuration;
using System.Data;
using System.Data.SqlClient;

namespace BasicWebApp.Controllers
{
    public class EmployeeController : ApiController
    {

        public HttpResponseMessage Get() {
            string query = @"
                select EmployeeId,EmployeeName,Department,convert(varchar(10),DateOfJoining,120) as DateOfJoining,
                PhotoFileName from
                dbo.Employee
                ";
            DataTable table = SqlCommand(query);
            
            return Request.CreateResponse(HttpStatusCode.OK, table);

        }
        public string Post(Employee emp) {

            try {
                string query = @"
                        insert into dbo.Employee values
                        ('" + emp.EmployeeName + @"',
                        '" + emp.Department + @"',
                        '" + emp.Date + @"',
                        '" + emp.PhotoFileName + @"'
                        )
                        ";
                SqlCommand(query);
                return "Added Successfully!!";
            }
            catch (Exception) {

                return "Failed to Add!!";
            }
        }
        public string Put(Employee emp) {

            try {
                string query = @"
                        update dbo.Employee set 
                        EmployeeName='" + emp.EmployeeName + @"',
                        Department='" + emp.Department + @"',
                        DateOfJoining='" + emp.Date + @"',
                        PhotoFileName='" + emp.PhotoFileName + @"'
                        where EmployeeId=" + emp.EmployeeId + @"
                        ";
                SqlCommand(query);
                return "Updated Successfully!!";
            }
            catch (Exception e) {

                return "Failed to Update!!";
            }
        }

        public string Delete(int id) {

            try {
                string query = @"
                        delete from dbo.Employee
                        where EmployeeId=" + id + @"
                        ";
                SqlCommand(query);
                return "Deleted Successfully!!";
            }
            catch (Exception) {

                return "Failed to delete!!";
            }
        }
        private DataTable SqlCommand(string query) {
            DataTable table = new DataTable();

            using (var con = new SqlConnection(ConfigurationManager.
                ConnectionStrings["EmployeeAppDB"].ConnectionString))
            using (var cmd = new SqlCommand(query, con))
            using (var da = new SqlDataAdapter(cmd)) {
                cmd.CommandType = CommandType.Text;
                da.Fill(table);
            }
            return table;
        }
        [Route("api/Employee/GetAllDepartmentNames")]
        [HttpGet]
        public HttpResponseMessage GetAllDepartmentNames() {
            string query = @"select DepartmentName from dbo.Department";
            SqlCommand(query);
            return Request.CreateResponse(HttpStatusCode.OK, SqlCommand(query));
        }

        
    }
}

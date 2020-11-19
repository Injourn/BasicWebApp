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
            DataTable table = SqlQuery(query);
            
            return Request.CreateResponse(HttpStatusCode.OK, table);

        }
        public string Post(Employee emp) {

            try {
                /*string query = @"
                        insert into dbo.Employee values
                        ('" + emp.EmployeeName + @"',
                        '" + emp.Department + @"',
                        '" + emp.DateOfJoining + @"',
                        '" + emp.PhotoFileName + @"'
                        )
                        ";*/
                string query = "insert into dbo.Employee values (@Name,@Department,@Date,@Photoname)";
                DataTable table = new DataTable();

                using (var con = new SqlConnection(ConfigurationManager.
                    ConnectionStrings["EmployeeAppDB"].ConnectionString))
                    using (var cmd = new SqlCommand(query, con)) {
                        cmd.Parameters.AddWithValue("@Name", SqlDbType.VarChar).Value = emp.EmployeeName;
                        cmd.Parameters.AddWithValue("@Department", SqlDbType.VarChar).Value = emp.Department;
                        cmd.Parameters.AddWithValue("@Date", SqlDbType.VarChar).Value = emp.DateOfJoining;
                        cmd.Parameters.AddWithValue("@Photoname", SqlDbType.VarChar).Value = emp.PhotoFileName;
                        using (var da = new SqlDataAdapter(cmd)) {
                            cmd.CommandType = CommandType.Text;
                            da.Fill(table);
                        }
                    }
                return "Added Successfully!!";
            }
            catch (Exception) {

                return "Failed to Add!!";
            }
        }
        public string Put(Employee emp) {

            try {
                string query = "update dbo.Employee set EmployeeName=@Name,Department=@Department,DateOfJoining=@Date,PhotoFileName=@Photo where EmployeeId=@Id";
                DataTable table = new DataTable();
                using (var con = new SqlConnection(ConfigurationManager.
                    ConnectionStrings["EmployeeAppDB"].ConnectionString))
                    using (var cmd = new SqlCommand(query, con)) {
                    cmd.Parameters.AddWithValue("@Id", SqlDbType.VarChar).Value = emp.EmployeeId;
                    cmd.Parameters.AddWithValue("@Name", SqlDbType.VarChar).Value = emp.EmployeeName;
                    cmd.Parameters.AddWithValue("@Department", SqlDbType.VarChar).Value = emp.Department;
                    cmd.Parameters.AddWithValue("@Date", SqlDbType.VarChar).Value = emp.DateOfJoining;
                    cmd.Parameters.AddWithValue("@Photo", SqlDbType.VarChar).Value = emp.PhotoFileName;
                        using (var da = new SqlDataAdapter(cmd)) {
                            cmd.CommandType = CommandType.Text;
                            da.Fill(table);
                        }
                    }
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
                SqlQuery(query);
                return "Deleted Successfully!!";
            }
            catch (Exception) {

                return "Failed to delete!!";
            }
        }
        private DataTable SqlQuery(string query) {
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
            SqlQuery(query);
            return Request.CreateResponse(HttpStatusCode.OK, SqlQuery(query));
        }

        [Route("api/Employee/SaveFile")]
        public string SaveFile() {
            try {
                var httpRequest = HttpContext.Current.Request;
                var postedFile = httpRequest.Files[0];
                string filename = postedFile.FileName;
                var physicalPath = HttpContext.Current.Server.MapPath("~/Photos/" + filename);

                postedFile.SaveAs(physicalPath);

                return filename;
            }
            catch (Exception) {

                return "anonymous.png";
            }
        }
    }
}

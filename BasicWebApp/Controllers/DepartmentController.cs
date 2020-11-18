﻿using System;
using System.Collections.Generic;
using System.Configuration;
using System.Data;
using System.Data.SqlClient;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using BasicWebApp.Models;

namespace BasicWebApp.Controllers
{
    public class DepartmentController : ApiController
    {
        public HttpResponseMessage Get() {
            string query = @"
                select DepartmentId,DepartmentName from
                dbo.Department
                ";
            DataTable table = new DataTable();

            using(var con= new SqlConnection(ConfigurationManager.
                ConnectionStrings["EmployeeAppDB"].ConnectionString))
            using (var cmd = new SqlCommand(query, con))
            using (var da = new SqlDataAdapter(cmd)) {
                cmd.CommandType = CommandType.Text;
                da.Fill(table);
            }

            return Request.CreateResponse(HttpStatusCode.OK, table);

        }
        public string Post(Department dep) {

            try {
                string query = "insert into dbo.Department values (@Name)";
                DataTable table = new DataTable();

                using (var con = new SqlConnection(ConfigurationManager.
                    ConnectionStrings["EmployeeAppDB"].ConnectionString))
                using (var cmd = new SqlCommand(query, con)) {
                    cmd.Parameters.AddWithValue("@Name", SqlDbType.VarChar).Value = dep.DepartmentName;
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
        public string Put(Department dep) {

            try {
                string query = @"update dbo.Department set DepartmentName=@Name where DepartmentId=@Id";
                DataTable table = new DataTable();

                using (var con = new SqlConnection(ConfigurationManager.
                    ConnectionStrings["EmployeeAppDB"].ConnectionString))
                using (var cmd = new SqlCommand(query, con)) {
                    cmd.Parameters.AddWithValue("@Name", SqlDbType.VarChar).Value = dep.DepartmentName;
                    cmd.Parameters.AddWithValue("@Id", SqlDbType.Int).Value = dep.DepartmentId;
                    using (var da = new SqlDataAdapter(cmd)) {
                        cmd.CommandType = CommandType.Text;
                        da.Fill(table);
                    }
                }
                return "Updated Successfully!!";
            }
            catch (Exception) {

                return "Failed to Update!!";
            }
        }

        public string Delete(int id) {

            try {
                string query = @"delete from dbo.Department where DepartmentId=" + id;
                DataTable table = new DataTable();

                using (var con = new SqlConnection(ConfigurationManager.
                    ConnectionStrings["EmployeeAppDB"].ConnectionString))
                using (var cmd = new SqlCommand(query, con))
                using (var da = new SqlDataAdapter(cmd)) {
                    cmd.CommandType = CommandType.Text;
                    da.Fill(table);
                }
                return "Deleted Successfully!!";
            }
            catch (Exception) {

                return "Failed to delete!!";
            }
        }

    }
}

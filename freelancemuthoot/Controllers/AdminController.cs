﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace freelancemuthoot.Controllers
{
    public class AdminController : Controller
    {
        // GET: Admin
        public ActionResult Login()
        {
            return View();
        }

        public ActionResult Dashboard()
        {
            return View();
        }
    }
}
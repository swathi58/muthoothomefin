using freelancemuthoot.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace freelancemuthoot.Controllers
{
    public class HomeController : Controller
    {
        public ActionResult Index()
        {
            List<State> slist = new List<State>()
            {
                new State{sid=1,sname="state1"},
                 new State{sid=2,sname="state2"},
                  new State{sid=3,sname="state3"},
            };
            ViewBag.stList = new SelectList(slist);
            List<City> clist = new List<City>()
            {
                new City{cid=1,cname="city1"},
                 new City{cid=2,cname="city2"},
                  new City{cid=3,cname="city3"},
            };
            ViewBag.ctyList = new SelectList(clist);

            List<QType> qlist = new List<QType>()
            {
                new QType{tid=1,tname="qt11"},
                 new QType{tid=2,tname="qt22"},
                  new QType{tid=3,tname="qt3"},
            };
            ViewBag.qtyList = new SelectList(qlist);
            return View();
        }

        public ActionResult About()
        {
            ViewBag.Message = "Your application description page.";

            return View();
        }

        public ActionResult Contact()
        {
            ViewBag.Message = "Your contact page.";

            return View();
        }
    }
}
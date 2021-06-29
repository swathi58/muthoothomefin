using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace freelancemuthoot.Models
{
    public class State
    {
        public int sid { get; set; }
        public string sname { get; set; }
    }
    public class City
    {
        public int cid { get; set; }
        public string cname { get; set; }
    }

    public class QType
    {
        public int tid { get; set; }
        public string tname { get; set; }
    }
}
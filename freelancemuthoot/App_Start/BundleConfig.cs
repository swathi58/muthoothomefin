using System.Web;
using System.Web.Optimization;

namespace freelancemuthoot
{
    public class BundleConfig
    {
        // For more information on bundling, visit https://go.microsoft.com/fwlink/?LinkId=301862
        public static void RegisterBundles(BundleCollection bundles)
        {
            bundles.Add(new ScriptBundle("~/bundles/Scripts").Include(

                "~/js/jquery-3.5.1.min.js",
                "~/js/bootstrap.min.js",
                "~/js/myscript.js"
                ));

            bundles.Add(new StyleBundle("~/Content/css").Include(

               "~/css/bootstrap.min.css",
               "~/css/common.css",
               "~/css/responsive.css",
                "~/css/animate.css",
               "~/css/slick-theme.css",
               "~/css/slick.css",
                "~/css/mystyle.css"
               ));
        }
    }
}



class AppUrl{

    static BaseUrl = 'http://localhost:8000/';

    static ChartData = this.BaseUrl+'chartdata/api/view/';
    static Clinet = this.BaseUrl+'client/api/view';
    static Contact = this.BaseUrl+'contact/api/view';
    static CoursesHome = this.BaseUrl+'course/api/home/';
    static CoursesAll = this.BaseUrl+'course/all';
    static ProjectHome = this.BaseUrl+'project/api/home/view/';
    static ProjectAll = this.BaseUrl+'project/api/home/all';
    static Footer = this.BaseUrl+'footer/api/view';
    static Home = this.BaseUrl+'home/api/view/';
    static Service = this.BaseUrl+'service/api/view/';

}

export default AppUrl;
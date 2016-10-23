var serviceURL = "http://lucianmesaros.ro/test/coenraets_org/services/";
var employees;

$(document).on('pageinit', '#employeeListPage', function(event) {
    getEmployeeList();
});

function getEmployeeList() {
    $.getJSON(serviceURL + 'getemployees.php', function(data) {
        $('#employeeList li').remove();
        employees = data.items;
        $.each(employees, function(index, employee) {
            $('#employeeList').append('<li><a href="employeedetails.html?id=' + employee.id + '">' +
                    '<img src="images/' + employee.picture + '"/>' +
                    '<h4>' + employee.firstName + ' ' + employee.lastName + '</h4>' +
                    '<p>' + employee.title + '</p>' +
                    '<span class="ui-li-count">' + employee.reportCount + '</span></a></li>');
        });
        $('#employeeList').listview('refresh');
    });
}
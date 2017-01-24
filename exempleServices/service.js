app.service('miFactory', function () {
        this.dishes = ["arroz","pasta"];
        
	this.getDishes = function () {
            return this.dishes;
        };
        this.getDish = function (index)
        {
            return this.dishes[index];
        };
    });

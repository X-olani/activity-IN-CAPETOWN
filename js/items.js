function Items(data) {
  this.id = data.id;
  this.name = data.name;
  this.location = data.location;
  this.hours = data.hours;
  this.phone = data.phone;
  this.apply = function() {
    console.log('APPLYING');
  }
}

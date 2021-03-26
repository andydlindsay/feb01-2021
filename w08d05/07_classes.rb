class Car < Parent
  def initialize make, model, year
    @make = make
    @model = model
    @year = year
  end

  attr_reader :model
  attr_writer :model
  attr_accessor :year

  def make
    # return @make
    @make
  end

  def make= new_make
    @make = new_make
  end
end

my_car = Car.new 'Toyota', 'Tercel', '1986'

p my_car
p my_car.make
my_car.make = 'Dodge'
p my_car

puts
p my_car.model
my_car.model = 'Grand Caravan'
p my_car

puts
p my_car.year
my_car.year = '1996'
p my_car

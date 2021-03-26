dogs = ['jebediah', 'tiggy', 'guido', 'good boy', 'king', 'dawg']

# dogs.each do |dog|
#   puts "hello there #{dog}"
# end

# lambdas == named blocks of code
# do_thing = lambda do |dog| puts "hello my #{dog}" end

do_thing = lambda { |dog| 
  puts "hello my #{dog}" 
}

dogs.each &do_thing

puts

def my_method &lamb
  lamb.call
  lamb.call
  # yield
  # yield
end

# say_something = lambda do puts "I'm giving up on you" end
say_something = -> do puts "I'm giving up on you" end

# arr << 'new thing'

my_method &say_something

# hashes are collections of key/value pairs

user = {
  "username" => "alice",
  "password" => "1234"
}

# my_key = 'password'
# puts user['username']
# puts user[my_key]

# user['new_key'] = 'apple'
# puts user

# p user['key that does not exist']

# user = {
#   :username => 'bob',
#   :password => '1234'
# }

# p user['username'.to_sym]

user = {
  username: 'carol',
  password: 'abcd'
}

puts user[:password]

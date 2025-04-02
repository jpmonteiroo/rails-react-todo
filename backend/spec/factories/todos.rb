FactoryBot.define do
  factory :todo do
    todo_name { Faker::Lorem.sentence }
    description { Faker::Lorem.paragraph }
    completed { false }
  end
end

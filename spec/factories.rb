FactoryGirl.define do
  factory :idea do
    sequence(:title) { |n| "Title ##{n}"}
    sequence(:body) { |n| "Description ##{n}"}
  end
end

# frozen_string_literal: true

FactoryBot.define do
  factory :invitation do
    association :reader
    association :community
  end
end

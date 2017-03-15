class Activity < ApplicationRecord
  include Authority::Abilities

  belongs_to :case
  has_one :case_element, as: :element

  translates :title, :description, :pdf_url
end

# frozen_string_literal: true

class Activity < ApplicationRecord
  include Authority::Abilities

  belongs_to :case, touch: true
  has_one :card, as: :element, dependent: :destroy

  include Element

  include Mobility
  translates :title, :description, :pdf_url, fallbacks: true

  after_create_commit -> { create_card }

  def cards
    [card]
  end
end

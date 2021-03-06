# frozen_string_literal: true

require 'administrate/base_dashboard'

class DeploymentDashboard < Administrate::BaseDashboard
  # ATTRIBUTE_TYPES
  # a hash that describes the type of each of the model's fields.
  #
  # Each different type represents an Administrate::Field object,
  # which determines how the attribute is displayed
  # on pages throughout the dashboard.
  ATTRIBUTE_TYPES = {
    answers_needed: Field::Number,
    case: Field::BelongsTo,
    created_at: Field::DateTime,
    enrollments: Field::HasMany,
    forum: Field::BelongsTo,
    group: Field::BelongsTo,
    id: Field::Number,
    key: Field::String,
    quiz: Field::BelongsTo,
    readers: Field::HasMany,
    updated_at: Field::DateTime
  }.freeze

  # COLLECTION_ATTRIBUTES
  # an array of attributes that will be displayed on the model's index page.
  #
  # By default, it's limited to four items to reduce clutter on index pages.
  # Feel free to add, remove, or rearrange items.
  COLLECTION_ATTRIBUTES = %i[
    case
    group
    answers_needed
    key
    created_at
  ].freeze

  # SHOW_PAGE_ATTRIBUTES
  # an array of attributes that will be displayed on the model's show page.
  SHOW_PAGE_ATTRIBUTES = %i[
    id
    answers_needed
    quiz
    key
    case
    group
    enrollments
    forum
    created_at
    updated_at
  ].freeze

  # FORM_ATTRIBUTES
  # an array of attributes that will be displayed
  # on the model's form (`new` and `edit`) pages.
  FORM_ATTRIBUTES = %i[
    case
    group
    readers
    answers_needed
    key
  ].freeze

  # Overwrite this method to customize how deployments are displayed
  # across all pages of the admin dashboard.
  #
  # def display_resource(deployment)
  #   "Deployment ##{deployment.id}"
  # end
end

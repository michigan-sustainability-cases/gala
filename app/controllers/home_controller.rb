class HomeController < ApplicationController
  include SelectionParams

  decorates_assigned :cases

  layout 'with_header'

  # @route [GET] `/`
  def index
    @cases = policy_scope(Case)
             .ordered
  end
end

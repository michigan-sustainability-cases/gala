ActiveAdmin.register Case do

  # See permitted parameters documentation:
  # https://github.com/activeadmin/activeadmin/blob/master/docs/2-resource-customization.md#setting-up-strong-parameters
  #
  # Uncomment all parameters which should be permitted for assignment
  #
  # permit_params :slug, :photo_credit, :commentable, :published_at, :featured_at, :latitude, :longitude, :zoom, :library_id, :locale, :translation_base_id, :acknowledgements, :audience, :authors, :classroom_timeline, :dek, :kicker, :learning_objectives, :summary, :title, :translators
  #
  # or
  #
  # permit_params do
  #   permitted = [:slug, :photo_credit, :commentable, :published_at, :featured_at, :latitude, :longitude, :zoom, :library_id, :locale, :translation_base_id, :acknowledgements, :audience, :authors, :classroom_timeline, :dek, :kicker, :learning_objectives, :summary, :title, :translators]
  #   permitted << :other if params[:action] == 'create' && current_user.admin?
  #   permitted
  # end
  menu label: "Cases"



  index do
    selectable_column
    id_column
    column "Slug", :slug
    column "Kicker", :kicker
    column "Locale", :locale
    column 'Case Elements' do |acase|
       acase.case_elements.count.to_s + " case elements"
    end
    column 'Enrollments' do |acase|
       acase.enrollments.count.to_s + " enrollments"
    end
    column 'Deployments' do |acase|
       acase.deployments.count.to_s + " deployments"
    end
    column 'Comments' do |acase|
       acase.comments.count.to_s + " comments"
    end
    actions
  end

end

ActiveAdmin.register BlogSetting do

    menu priority: 4

    form partial: 'form'

    controller do
      def update
        @blog_setting = BlogSetting.find(params[:id])
        if @blog_setting.update(blog_setting_params)
          if params[:blog_setting][:image].present?
            render :crop #, :layout => 'pages'
          else
            render :show, notice: 'Site property was successfully updated.'
          end
        else
          render :edit
        end
      end

      private
      def blog_setting_params
        params.require(:blog_setting).permit(:name, :value, :image, :crop_x, :crop_y, :crop_w, :crop_h)
      end
    end


    index do
      selectable_column
      id_column
      column "Image" do |blog_setting|
        if blog_setting.thumbnail('71x50')
          image_tag blog_setting.thumbnail('71x50')
        else
          ''
        end
      end
      column :name
      column :value
      actions
    end

    show do
      attributes_table do
        row 'Image' do |blog_setting|
          if blog_setting.thumbnail('142x100')
            image_tag blog_setting.thumbnail('142x100')
          else
            ''
          end
        end
        row :name
        row :value
        row :created_at
        row :updated_at
      end
    end

end

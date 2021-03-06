# frozen_string_literal: true

class CreateEdgenotes < ActiveRecord::Migration[5.0]
  def change
    create_table :edgenotes do |t|
      t.hstore :caption_i18n
      t.string :format
      t.string :thumbnail_url
      t.hstore :content_i18n
      t.references :case

      t.timestamps
    end
  end
end

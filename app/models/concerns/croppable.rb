module Croppable
  extend ActiveSupport::Concern

  included do
    attr_accessor :crop_x, :crop_y, :crop_w, :crop_h
    before_save :check_cropping
  end

  def check_cropping
    self.crop_settings = {x: crop_x, y: crop_y, w: crop_w, h: crop_h} if cropping?
  end

  def cropping?
    !crop_x.blank? && !crop_y.blank? && !crop_w.blank? && !crop_h.blank?
  end

  def cropped_image(image, size)
    begin
      if image.attached?
        if crop_settings.is_a? Hash
          dimensions = "#{crop_settings['w']}x#{crop_settings['h']}"
          coord = "#{crop_settings['x']}+#{crop_settings['y']}"
          image.variant(
          crop: "#{dimensions}+#{coord}",
          resize: size
          ).processed
        else
          image.variant(resize: size).processed
        end
      else
        return nil
      end
    rescue
      return
    end
  end

end

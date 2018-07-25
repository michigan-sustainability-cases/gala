# frozen_string_literal: true

require 'rails_helper'

RSpec.describe Case, type: :model do
  subject { build_stubbed :case }

  it 'is valid with valid attributes' do
    expect(subject).to be_valid
  end

  it 'is generates a random slug by default' do
    expect(subject.slug).not_to be_nil
  end

  it 'is not valid with an invalid slug' do
    subject.slug = 'asdf asdf'
    expect(subject).to_not be_valid

    subject.slug = 'asdf_asdf'
    expect(subject).to_not be_valid

    subject.slug = 'asdf/asdf'
    expect(subject).to_not be_valid

    subject.slug = 'ASDF-ASDF'
    expect(subject).to_not be_valid
  end

  context 'in translation', focus: true do
    subject { build :case }

    it 'sets itself as translation base when created w/o other translations' do
      subject.save
      expect(subject.translation_base).to eq subject
    end

    it 'doesn’t override a defined translation base' do
      subject.save
      sujet = Case.create translation_base_id: subject.id, locale: :fr
      expect(sujet.translation_base).to eq subject
    end

    it 'filters itself out of its translations' do
      subject.save
      sujet = Case.create translation_base_id: subject.id, locale: :fr
      expect(sujet.translations).to include subject
      expect(sujet.translations).not_to include sujet
    end
  end
end

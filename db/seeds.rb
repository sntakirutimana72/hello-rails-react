# frozen_string_literal: true

1.upto(5).each { |j| Message.create(text: "MESSAGE_TEMPLATE_#{j}") }

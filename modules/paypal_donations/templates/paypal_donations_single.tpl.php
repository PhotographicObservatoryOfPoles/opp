<form action="https://<?php echo variable_get('paypal_donations_service_url', 'www.sandbox.paypal.com'); ?>/cgi-bin/webscr" method="post" target="_blank" class="single-donation-form donation-form">
  <div class="inner_content">
    <h3><?php echo t("Make " . $variables['item_name']); ?></h3>
    <input name="landing_page" type="hidden" value="billing" />
    <input name="cpp_cart_border_color" type="hidden" value="FF0000" />
    <?php
      if(!empty($variables['top_logo'])) {
    ?>
    <input name="cpp_header_image" type="hidden" value="<?php echo file_create_url($variables['top_logo']->uri, array('absolute' => TRUE))?>" />
    <?php
      }
    ?>    <input name="cpp_payflow_color" type="hidden" value="D20137" />
    <input name="business" type="hidden" value="<?php echo $variables['account_email']; ?>" />
    <input name="cmd" type="hidden" value="_donations" />
    <input type="hidden" name="notify_url" value="<?php echo $variables['notify_url']; ?>">
    <input type="hidden" name="return" value="<?php echo $variables['return_url']; ?>"/>
    <input name="item_name" type="hidden" value="<?php echo $variables['item_name']; ?>" />
    <ul class="column">
      <?php
      for($i = 0 ; $i < count($variables['predefined_amounts']) ; $i++) {
        echo '<li><input id="pre_single_' . $i . '" type="checkbox" class="donation-amount donation-single" value="' . $variables['predefined_amounts'][$i] . '" /> <label for="pre_single_' . $i . '">' . $variables['currency_sign'] . $variables['predefined_amounts'][$i] . '</label></li>';
        }
      ?>
      <?php if( $variables['custom_amount_allowed'] == 1 ) { ?>
      <li class="last"><?php echo t('Montant libre')." : ".$variables['currency_sign']; ?><input name="other" size="4" type="text" value="" class="other" /></li>
      <?php } ?>
      <input type="hidden" value="" name="amount" class="amount-holder"/>
    </ul>
    <input name="currency_code" type="hidden" value="<?php echo $variables['currency_code']; ?>" /><br />
  </div>
  <a href="#" class="donation-submit-button"><?php echo t($variables['submit_value']); ?></a>
</form>

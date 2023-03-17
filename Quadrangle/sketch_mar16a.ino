#define Relay 13
#define CountofError 3
#include <ArduinoUniqueID.h>
int flag=0;
int t1=0;
int t2=0;
int t3=0;
int ct=0;
String sid="";


void setup() 
{
  Serial.begin(9600);
  pinMode(2,OUTPUT);
  pinMode(Relay,OUTPUT); 

  // UniqueIDdump(Serial);
 
  for (size_t i = 0; i < UniqueIDsize; i++)
  {
    if (UniqueID[i] < 0x10)
      sid+='0';
    
    sid+=String(UniqueID[i],HEX);
  } 

}
void loop() 
{
  int x=analogRead(A0);
  // Serial.println(x);

    if(x<400)
  {
    t1=0;
    if(ct<CountofError)digitalWrite(Relay,HIGH);
    flag=0;
  }
  
  else if(x>400)
  {

    if(t1==0){
      t1=millis();
      if(ct<CountofError)digitalWrite(Relay,HIGH);
      else {
        Serial.print(sid);
        Serial.print(',');
        Serial.println(ct);
        
      }
      flag=0;
    }
    else {
      t2=millis(); 
      // Serial.println(t2-t1);
      if((t2-t1)>3000)
      {

        t3=millis();
        // digitalWrite(2,HIGH);
        // Serial.println("Alert2!!!!!!!!!!!!!!!!!");
        tone(2,200,2000);        
        // delay(2000);
        // digitalWrite(2,LOW);
        
            
        if((t3-t1)>7000){

          // Serial.println(t3-t1);
          if(flag==0)ct++;
          flag=1;
          digitalWrite(Relay,LOW);
        }
        else {
          if(ct<CountofError)digitalWrite(Relay,HIGH); 
          else {
            Serial.print(sid);
            Serial.print(',');
            Serial.println(ct);
          }         
        }
      }
      
      else {
        t3=0;
        if(ct<CountofError)digitalWrite(Relay,HIGH);
        else {
          Serial.print(sid);
          Serial.print(',');
          Serial.println(ct);
        
        }
        }
    }
        
  } 
}


